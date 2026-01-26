import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeaturePoint {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export type UserRole = 'Founder' | 'Marketer' | 'Merchandiser' | '';

export interface WaitlistFormState {
  email: string;
  storeUrl: string;
  role: UserRole;
  status: 'idle' | 'loading' | 'success' | 'error';
}