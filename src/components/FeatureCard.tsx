
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const FeatureCard = ({ title, description, Icon }: FeatureCardProps) => {
  return (
    <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 hover:border-accent/50 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="text-accent" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
