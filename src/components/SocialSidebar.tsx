import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/Brajesh31',
    color: 'hover:bg-[#333333]',
    ariaLabel: 'View GitHub profile with EdTech-Community projects',
    title: 'GitHub - Brajesh31 | EdTech-Community Projects & Open Source'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/brajesh-kumar-9b58651a8/',
    color: 'hover:bg-[#0077B5]',
    ariaLabel: 'Connect on LinkedIn for EdTech-Community and professional networking',
    title: 'LinkedIn - Brajesh Kumar | EdTech-Community founder & AI Engineer'
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:bk117134@gmail.com',
    color: 'hover:bg-[#EA4335]',
    ariaLabel: 'Send email for EdTech-Community collaboration and projects',
    title: 'Email - Contact for EdTech-Community & Project Collaboration'
  },
  {
    name: 'Phone',
    icon: Phone,
    href: 'tel:+917452971645',
    color: 'hover:bg-[#25D366]',
    ariaLabel: 'Call for urgent EdTech-Community or project discussions',
    title: 'Phone - Direct contact for EdTech-Community & Projects'
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/917452971645?text=Hi%20Brajesh%2C%0A%0AI%20came%20across%20your%20EdTech-Community%20profile%20and%20found%20it%20really%20interesting!%20I%E2%80%99d%20love%20to%20connect%20and%20discuss%20potential%20opportunities%20for%20collaboration%20or%20work%20together.%0A%0ALooking%20forward%20to%20your%20response.%0A%0AThanks!',
    color: 'hover:bg-[#25D366]',
    ariaLabel: 'Message on WhatsApp for EdTech-Community discussions',
    title: 'WhatsApp - Quick messaging for EdTech-Community & Collaboration'
  },
  {
    name: 'Telegram',
    icon: Send,
    href: 'https://t.me/brajesh31',
    color: 'hover:bg-[#0088cc]',
    ariaLabel: 'Message on Telegram for EdTech-Community updates',
    title: 'Telegram - Instant messaging for EdTech-Community & Tech Discussions'
  }
];

const SocialSidebar = () => {
  const { theme } = useTheme();
  
  return (
    <aside 
      className="fixed right-6 top-[25%] z-40 flex flex-col gap-4"
      aria-label="Social Media Links"
      role="complementary"
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`p-3.5 rounded-full backdrop-blur-lg
              ${theme === 'dark' ? 'bg-dark-card/30' : 'bg-light-card/30'}
              ${link.color} hover:text-white
              transform hover:scale-110 hover:shadow-lg
              transition-all duration-300 group`}
            aria-label={link.ariaLabel}
            title={link.title}
          >
            <link.icon className="w-5 h-5" aria-hidden="true" />
            <span className="sr-only">{link.name}</span>
          </motion.a>
        ))}
        
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 80, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`w-px mx-auto bg-gradient-to-b 
            ${theme === 'dark' 
              ? 'from-dark-accent-primary to-dark-accent-secondary' 
              : 'from-light-accent-primary to-light-accent-secondary'}`}
          aria-hidden="true"
        />
      </motion.div>
    </aside>
  );
};

export default SocialSidebar;