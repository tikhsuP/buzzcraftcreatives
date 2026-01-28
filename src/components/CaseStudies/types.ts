export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  tag: string;
  clientName: string;
  clientLogo: string;
  headline: string;
  description: string;
  metrics: CaseStudyMetric[];
  images: string[];
  detailPosition: 'left' | 'right';
}
