import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

interface MetricItem {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const metrics: MetricItem[] = [
  { value: 8, label: "Years Building", suffix: "+" },
  { value: 83, label: "Projects Shipped", suffix: "+" },
  { value: 50, label: "Users Impacted", prefix: "", suffix: "K+" },
  { value: 99.9, label: "Uptime SLA", suffix: "%", decimals: 1 },
];

function AnimatedCounter({ value, prefix = "", suffix = "", decimals = 0 }: MetricItem) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;

      if (decimals > 0) {
        setDisplay(current.toFixed(decimals));
      } else {
        setDisplay(Math.round(current).toString());
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, value, decimals]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

export function MetricsBar() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 lg:px-12 mb-32">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="relative group"
          >
            <div className="bg-white/2 border border-white/5 rounded-3xl p-8 text-center hover:border-primary/20 transition-all duration-500 hover:bg-white/4">
              <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-3">
                <AnimatedCounter {...metric} />
              </div>
              <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">
                {metric.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
