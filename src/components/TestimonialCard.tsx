
import { MessageSquareQuote, Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

const TestimonialCard = ({ name, role, company, quote, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
      <div className="flex items-start gap-4 mb-4">
        <MessageSquareQuote className="text-accent shrink-0" size={24} />
        <p className="text-gray-600 italic">{quote}</p>
      </div>
      <div className="flex items-center gap-1 mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="text-accent fill-accent" size={16} />
        ))}
      </div>
      <div>
        <p className="font-semibold text-primary">{name}</p>
        <p className="text-sm text-gray-500">{role}, {company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
