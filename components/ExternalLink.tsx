import { ExternalPathString, Link, RelativePathString } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Platform } from 'react-native';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: RelativePathString | ExternalPathString,
  /**
   * 是否在应用内浏览器中打开链接（仅 Native 平台有效）
   * @default true
   */
  openInApp?: boolean
};

export function ExternalLink({ href, openInApp, ...rest }: Props) {
  const handlePress = async (event: any) => {
    if (Platform.OS !== 'web' && openInApp) {
      // 阻止默认行为
      event.preventDefault();

      try {
        // 在应用内浏览器中打开链接
        await openBrowserAsync(href);
      } catch (error) {
        console.error('无法打开链接:', error);
      }
    }
  };

  return (
    <Link
      target="_blank"
      href={href}
      onPress={handlePress}
      // Web 平台安全性优化
      {...(Platform.OS === 'web' && { rel: 'noopener noreferrer' })}
      {...rest}
    />
  );
}
