'use client';

import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout } from '@/components/Layout';
import Form from 'next/form';

export default function ContactPage() {
  function handleSubmit(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const mailto = `mailto:group12llmsafetysim@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
  }

  return (
    <Layout backButton={{ href: '/', label: 'Back to Home' }}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>We'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form className="space-y-4" action={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input name="email" type="email" placeholder="Your email address" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input name="subject" placeholder="Message subject" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea name="message" placeholder="Your message" rows={5} required />
                </div>
                <Button className="w-full" type="submit">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">group12llmsafetysim@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-medium">Research Collaboration</h3>
                  <p className="text-sm text-muted-foreground">group12llmsafetysim@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-medium">Technical Support</h3>
                  <p className="text-sm text-muted-foreground">group12llmsafetysim@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">Is this simulator safe to use?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, the simulator is designed for educational purposes and uses controlled environments to demonstrate vulnerabilities.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Can I contribute to the project?</h3>
                  <p className="text-sm text-muted-foreground">
                    We welcome contributions from researchers and developers. Please contact our research team for collaboration opportunities.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">How is my data handled?</h3>
                  <p className="text-sm text-muted-foreground">
                    Your attack sequences and simulation data are stored locally in your browser. See our Privacy Policy for more details.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
