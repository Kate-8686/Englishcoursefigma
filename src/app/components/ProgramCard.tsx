import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string;
  index: number;
}

export function ProgramCard({ icon: Icon, title, description, benefits, index }: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground mb-3 leading-relaxed">{description}</p>
          <p className="text-sm text-secondary italic">{benefits}</p>
        </div>
      </div>
    </motion.div>
  );
}
