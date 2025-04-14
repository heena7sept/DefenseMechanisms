'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getSavedAttackSequences, deleteAttackSequence, type AttackSequence } from '@/lib/simulator-api';
import { Play, Trash2, Download, Upload, Clock, CheckCircle, Search, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from 'sonner';

export function AttackSequenceManager() {
  const [sequences, setSequences] = useState<AttackSequence[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSequence, setSelectedSequence] = useState<AttackSequence | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  // Load saved sequences
  useEffect(() => {
    const loadSequences = () => {
      const savedSequences = getSavedAttackSequences();
      setSequences(savedSequences);
    };

    loadSequences();

    // Refresh sequences every 5 seconds in case new ones are added
    const intervalId = setInterval(loadSequences, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Filter sequences based on search term
  const filteredSequences = sequences.filter(
    seq =>
      seq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seq.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seq.scenarioId.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Handle sequence deletion
  const handleDeleteSequence = (id: string) => {
    if (window.confirm('Are you sure you want to delete this sequence?')) {
      const success = deleteAttackSequence(id);
      if (success) {
        setSequences(sequences.filter(seq => seq.id !== id));
        if (selectedSequence?.id === id) {
          setSelectedSequence(null);
          setShowDetails(false);
        }
      }
    }
  };

  // Handle sequence replay
  const handleReplaySequence = (sequence: AttackSequence) => {
    console.log('Replaying sequence:', sequence);
    // Implementation for replaying sequences would go here
  };

  // Handle sequence export
  const handleExportSequence = (sequence: AttackSequence) => {
    const dataStr = JSON.stringify(sequence, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;

    const exportFileDefaultName = `${sequence.scenarioId}_sequence_${new Date().toISOString().slice(0, 10)}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  // Handle file import
  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = e => {
      try {
        const content = e.target?.result as string;
        const importedSequence = JSON.parse(content) as AttackSequence;

        // Validate imported sequence
        if (!importedSequence.id || !importedSequence.scenarioId || !Array.isArray(importedSequence.messages)) {
          alert('Invalid sequence file format');
          return;
        }

        // Add to sequences
        setSequences([...sequences, importedSequence]);

        // Reset file input
        event.target.value = '';
      } catch (error) {
        alert('Failed to parse sequence file');
      }
    };
    reader.readAsText(file);
  };

  // View sequence details
  const handleViewDetails = (sequence: AttackSequence) => {
    setSelectedSequence(sequence);
    setShowDetails(true);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Saved Attack Sequences</CardTitle>
        <CardDescription>Replay, export, or manage your saved attack sequences</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search sequences..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-8" />
            </div>
            <Label htmlFor="import-sequence" className="cursor-pointer">
              <div className="flex h-10 items-center justify-center rounded-md border border-input bg-background px-3 text-xs font-medium">
                <Upload className="mr-2 h-4 w-4" />
                Import
              </div>
              <Input id="import-sequence" type="file" accept=".json" onChange={handleFileImport} className="hidden" />
            </Label>
          </div>

          {filteredSequences.length > 0 ? (
            <ScrollArea className="h-[300px] rounded-md border">
              <div className="p-4 space-y-4">
                {filteredSequences.map(sequence => (
                  <div key={sequence.id} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-medium">{sequence.name}</h4>
                          <Badge
                            variant={sequence.successful ? 'destructive' : 'default'}
                            className={sequence.successful ? 'bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-200' : ''}
                          >
                            {sequence.successful ? 'Jailbreak Successful' : 'Jailbreak Failed'}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{sequence.description}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {sequence.scenarioId}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {new Date(sequence.timestamp).toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" onClick={() => handleViewDetails(sequence)}>
                          <Search className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleReplaySequence(sequence)}>
                          <Play className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleExportSequence(sequence)}>
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteSequence(sequence.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </ScrollArea>
          ) : (
            <div className="text-center py-8 text-muted-foreground border rounded-md">
              <p>No saved sequences found</p>
              <p className="text-xs mt-1">Complete a scenario to save attack sequences</p>
            </div>
          )}
        </div>
      </CardContent>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Sequence Details</DialogTitle>
            <DialogDescription>{selectedSequence?.description}</DialogDescription>
          </DialogHeader>

          {selectedSequence && (
            <div className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium">Scenario</h4>
                  <p className="text-sm text-muted-foreground">{selectedSequence.scenarioId}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Status</h4>
                  <div className="flex items-center gap-2">
                    {selectedSequence.successful ? (
                      <>
                        <AlertCircle className="h-4 w-4 text-red-500" />
                        <span className="text-sm text-muted-foreground">Jailbreak Successful</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">Jailbreak Failed</span>
                      </>
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Created</h4>
                  <p className="text-sm text-muted-foreground">{new Date(selectedSequence.timestamp).toLocaleString()}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Model</h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedSequence.modelInfo?.provider} / {selectedSequence.modelInfo?.model}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Conversation</h4>
                <ScrollArea className="h-[300px] rounded-md border p-4">
                  <div className="space-y-4">
                    {selectedSequence.messages.map((message, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-md ${message.role === 'user' ? 'bg-muted' : message.role === 'assistant' ? 'bg-primary/10' : 'bg-muted/50 text-center'}`}
                      >
                        <div className="text-xs font-medium mb-1">{message.role === 'user' ? 'User' : message.role === 'assistant' ? 'Assistant' : 'System'}</div>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => handleReplaySequence(selectedSequence)}>
                  <Play className="h-4 w-4 mr-2" />
                  Replay Sequence
                </Button>
                <Button variant="outline" onClick={() => handleExportSequence(selectedSequence)}>
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
}
