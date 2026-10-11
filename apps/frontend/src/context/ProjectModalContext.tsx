'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProjectModalContextType {
  isOpen: boolean;
  openModal: (defaultService?: string) => void;
  closeModal: () => void;
  defaultService?: string;
}

const ProjectModalContext = createContext<ProjectModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function ProjectModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultService, setDefaultService] = useState<string | undefined>(undefined);

  const openModal = (service?: string) => {
    setDefaultService(service);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setDefaultService(undefined);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <ProjectModalContext.Provider value={{ isOpen, openModal, closeModal, defaultService }}>
      {children}
    </ProjectModalContext.Provider>
  );
}

export function useProjectModal() {
  return useContext(ProjectModalContext);
}
