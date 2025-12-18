import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  text: string;
  index: number;
}

export function FeatureCard({ icon: Icon, text, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-start gap-3 p-4 bg-card/50 rounded-lg border border-border/50"
    >
      <div className="p-2 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg shrink-0">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <p className="text-foreground leading-relaxed">{text}</p>
    </motion.div>
  );
}
