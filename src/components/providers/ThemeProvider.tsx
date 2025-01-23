'use client';

import React, { PropsWithChildren } from 'react';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<NextThemeProvider attribute="class">
			<Theme accentColor="gray" radius="small">
				{children}
			</Theme>

			<Toaster />
		</NextThemeProvider>
	);
};

export default ThemeProvider;
