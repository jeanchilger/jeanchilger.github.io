import GitHub from '@/assets/icons/github.svg';
import Gmail from '@/assets/icons/gmail.svg'
import LinkedIn from '@/assets/icons/linkedin.svg'
import WhatsApp from '@/assets/icons/whatsapp.svg'

export const icons = {
    github: GitHub,
    gmail: Gmail,
    linkedin: LinkedIn,
    whatsapp: WhatsApp,
};

export type IconName = keyof typeof icons;

export const iconNames = Object.keys(icons) as [
    IconName,
    ...IconName[]
];
