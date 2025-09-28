export interface TemplateConfig {
  name: string;
  description: string;
  generateHtml: (data: any) => string;
  generateCss: (data: any) => string;
  generateJs: (data: any) => string;
}

export * from './business';
export * from './minimalist';
export * from './crypto';
export * from './ecommerce';
export * from './chat';
