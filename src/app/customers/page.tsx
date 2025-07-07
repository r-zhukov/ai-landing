"use client";
import React, { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ value, duration = 1200, format = (v: number) => v.toLocaleString() }: { value: number; duration?: number; format?: (v: number) => string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime: number | null = null;
    function animate(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(value);
    }
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [value]);
  return <span>{format(count)}</span>;
}

const icons = {
  views: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#4f8cff"/><ellipse cx="16" cy="16" rx="10" ry="6" fill="#fff" opacity="0.9"/><circle cx="16" cy="16" r="3.5" fill="#4f8cff"/></svg>
  ),
  sold: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#6800F8"/><rect x="10" y="14" width="12" height="8" rx="2" fill="#fff"/><rect x="14" y="10" width="4" height="4" rx="2" fill="#fff"/></svg>
  ),
  conversion: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#a78bfa"/><path d="M10 18l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
};

export default function CustomersPage() {
  const moreCustomers = [
    {
      name: 'Acme Corp',
      industry: 'E-commerce',
      spend: '$120,000',
      growth: '+320% Engagement',
      description: 'Acme Corp used MaverickX Vision to launch their "Acme SmartHome" product line. With personalized video ads targeting key demographics, they achieved a 320% increase in engagement. The campaign resulted in 2.4 million product views, 48,000 units sold, and a 4x boost in sales within 6 months.',
      stats: [
        { label: 'Videos Created', value: '12,000' },
        { label: 'Product Views via MaverickX', value: '2,400,000' },
        { label: 'Products Sold via MaverickX', value: '48,000' },
        { label: 'Avg. Watch Time', value: '4m 10s' },
        { label: 'Revenue Growth', value: '+$2.1M' },
      ],
      chart: { views: 2400000, sold: 48000 },
    },
    {
      name: 'BetaSoft',
      industry: 'SaaS',
      spend: '$85,000',
      growth: '2M+ Views',
      description: 'BetaSoft integrated MaverickX Vision for onboarding and feature launches of their "BetaSuite" SaaS platform. Their video-driven approach led to 1.95 million product views and 3,800 new subscriptions. The campaign increased paid signups by 210% and improved user retention.',
      stats: [
        { label: 'Videos Created', value: '8,500' },
        { label: 'Product Views via MaverickX', value: '1,950,000' },
        { label: 'Products Sold via MaverickX', value: '3,800' },
        { label: 'User Growth', value: '+210%' },
        { label: 'New Subscriptions', value: '+4,200' },
      ],
      chart: { views: 1950000, sold: 3800 },
    },
    {
      name: 'EduPro',
      industry: 'Education',
      spend: '$60,000',
      growth: '5x Faster Production',
      description: 'EduPro used MaverickX Vision to promote their new online course bundles. Automated video creation enabled 1.1 million product views and 2,200 course sales. The campaign led to a 60% increase in signups and a 92% course completion rate.',
      stats: [
        { label: 'Videos Created', value: '6,200' },
        { label: 'Product Views via MaverickX', value: '1,100,000' },
        { label: 'Products Sold via MaverickX', value: '2,200' },
        { label: 'Completion Rate', value: '92%' },
        { label: 'Course Sales', value: '+60%' },
      ],
      chart: { views: 1100000, sold: 2200 },
    },
    {
      name: 'Healthly',
      industry: 'Healthcare',
      spend: '$95,000',
      growth: '98% Satisfaction',
      description: 'Healthly launched their "Wellness+" product line using MaverickX Vision for educational and testimonial videos. The campaign generated 1.35 million product views and 5,400 orders, achieving a 98% satisfaction rate and tripling product sales.',
      stats: [
        { label: 'Videos Created', value: '7,800' },
        { label: 'Product Views via MaverickX', value: '1,350,000' },
        { label: 'Products Sold via MaverickX', value: '5,400' },
        { label: 'Bookings Growth', value: '3x' },
        { label: 'Product Orders', value: '+3x' },
      ],
      chart: { views: 1350000, sold: 5400 },
    },
    {
      name: 'FinEdge',
      industry: 'Finance',
      spend: '$150,000',
      growth: 'Top 1% Viral',
      description: 'FinEdge used MaverickX Vision to market their new "SmartInvest" product. Their viral video campaign resulted in 2.8 million product views, 7,200 new accounts, and $3M in new assets under management. The campaign reached the top 1% of viral finance content.',
      stats: [
        { label: 'Videos Created', value: '15,000' },
        { label: 'Product Views via MaverickX', value: '2,800,000' },
        { label: 'Products Sold via MaverickX', value: '7,200' },
        { label: 'New Accounts', value: '+400%' },
        { label: 'Assets Added', value: '+$3M' },
      ],
      chart: { views: 2800000, sold: 7200 },
    },
    {
      name: 'Travelio',
      industry: 'Travel',
      spend: '$70,000',
      growth: '4.7/5 Rating',
      description: 'Travelio promoted exclusive travel packages with MaverickX Vision, using dynamic video ads. Their campaign generated 900,000 product views and 2,100 bookings, resulting in a 2.5x increase in bookings and a 180% rise in repeat customers.',
      stats: [
        { label: 'Videos Created', value: '5,900' },
        { label: 'Product Views via MaverickX', value: '900,000' },
        { label: 'Products Sold via MaverickX', value: '2,100' },
        { label: 'Bookings Growth', value: '2.5x' },
        { label: 'Repeat Customers', value: '+180%' },
      ],
      chart: { views: 900000, sold: 2100 },
    },
  ];

  return (
    <section style={{
      background: '#181818',
      minHeight: '100vh',
      padding: '5rem 0 4rem 0',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '2.2rem', letterSpacing: '-0.01em', textAlign: 'center', color: '#fff' }}>Customers</h1>
      <div style={{ color: '#ededed', fontWeight: 400, fontSize: '1.18rem', marginBottom: '2.8rem', textAlign: 'center', opacity: 0.92, maxWidth: 700 }}>
        Discover how leading brands use MaverickX Vision to drive product views and sales with AI-powered video campaigns. Each story below highlights real results and the impact of our platform on their business growth.
      </div>
      <div style={{ width: '100%', maxWidth: 1200, display: 'flex', flexDirection: 'column', gap: '3.2rem' }}>
        {moreCustomers.map((c, i) => {
          const conversion = c.chart.sold / c.chart.views;
          // Exclude stats that are shown on the right
          const rightStatLabels = [
            'Product Views via MaverickX',
            'Products Sold via MaverickX',
            'Product Views',
            'Products Sold',
            'Conversion',
            'Conversion Rate',
          ];
          const filteredStats = c.stats.filter(
            s => !rightStatLabels.some(label => s.label.toLowerCase().includes(label.toLowerCase()))
          );
          return (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'row',
              background: 'none',
              borderRadius: '1.2rem',
              overflow: 'hidden',
              minHeight: 220,
              boxShadow: '0 2px 24px 0 rgba(0,0,0,0.18)',
              border: '1.5px solid #181818',
              backdropFilter: 'blur(2px)',
            }}>
              {/* Left: Customer info and unique stats */}
              <div style={{
                flex: 1.1,
                minWidth: 0,
                background: '#111',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding: '2.5rem 2.2rem',
                borderRight: '1.5px solid #181818',
              }}>
                <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 6, color: '#fff' }}>{c.name}</div>
                <div style={{ color: '#bdbdbd', fontWeight: 400, fontSize: '1.05rem', marginBottom: 12 }}>{c.industry}</div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: '1.08rem', marginBottom: 18 }}>Spend: {c.spend}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', width: '100%' }}>
                  {filteredStats.map((s, j) => (
                    <div key={j} style={{ background: '#181818', borderRadius: '0.5rem', padding: '0.7rem 1.2rem', color: '#fff', fontWeight: 500, fontSize: '1.02rem', minWidth: 90, textAlign: 'left' }}>
                      <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#fff' }}>{s.value}</div>
                      <div style={{ color: '#bdbdbd', fontWeight: 400, fontSize: '0.98rem' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right: Growth story and bold stats */}
              <div style={{
                flex: 1.5,
                background: '#000',
                padding: '2.5rem 2.2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: 220,
              }}>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.13rem', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ background: 'linear-gradient(90deg, #6800F8 40%, #4f8cff 100%)', color: '#fff', borderRadius: 8, padding: '0.25em 0.8em', fontWeight: 700, fontSize: '1.02rem', marginRight: 10 }}>{c.growth}</span>
                  {c.growth.includes('%') && <span style={{ color: '#a78bfa', fontWeight: 400, fontSize: '1.02rem' }}>growth</span>}
                </div>
                <div style={{ color: '#ededed', fontWeight: 400, fontSize: '1.13rem', opacity: 1, lineHeight: 1.6, marginBottom: 24 }}>{c.description}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 36, marginBottom: 8 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 90 }}>
                    {icons.views}
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.35rem', marginTop: 8 }}>
                      <AnimatedCounter value={c.chart.views} format={v => v.toLocaleString()} />
                    </div>
                    <div style={{ color: '#bdbdbd', fontWeight: 400, fontSize: '1.02rem', marginTop: 2 }}>Product Views</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 90 }}>
                    {icons.sold}
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.35rem', marginTop: 8 }}>
                      <AnimatedCounter value={c.chart.sold} format={v => v.toLocaleString()} />
                    </div>
                    <div style={{ color: '#bdbdbd', fontWeight: 400, fontSize: '1.02rem', marginTop: 2 }}>Products Sold</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 90 }}>
                    {icons.conversion}
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.35rem', marginTop: 8 }}>
                      <AnimatedCounter value={Math.round(conversion * 1000)} format={v => (v / 10).toFixed(1) + '%'} />
                    </div>
                    <div style={{ color: '#a78bfa', fontWeight: 400, fontSize: '1.02rem', marginTop: 2 }}>Conversion</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
} 