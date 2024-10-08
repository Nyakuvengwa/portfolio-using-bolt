import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Mail, Phone } from 'lucide-react';

interface ContactInfoProps {
  type: 'email' | 'phone';
  value: string;
  buttonText?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ type, value, buttonText }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleAction = () => {
    if (isRevealed) {
      if (type === 'email') {
        window.location.href = `mailto:${value}`;
      } else if (type === 'phone') {
        window.location.href = `tel:${value}`;
      }
    } else {
      handleReveal();
    }
  };

  const icon = type === 'email' ? <Mail className="w-5 h-5" /> : <Phone className="w-5 h-5" />;
  const displayText = isRevealed ? value : '● ● ● ● ● ● ● ●';

  return (
    <div className="flex items-center space-x-2">
      {icon}
      <span className="text-foreground">{displayText}</span>
      <Button variant="outline" size="sm" onClick={handleAction}>
        {isRevealed ? (buttonText || (type === 'email' ? 'Send Email' : 'Call')) : 'Reveal'}
      </Button>
    </div>
  );
};

export default ContactInfo;