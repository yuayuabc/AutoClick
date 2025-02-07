// This file is a fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, TextStyle } from 'react-native';

// Add your SFSymbol to MaterialIcons mappings here.
const MAPPING = {
  // See MaterialIcons here: https://icons.expo.fyi
  // See SF Symbols in the SF Symbols app on Mac.
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'star.fill': 'star',
  'star': 'star-border',
  'heart.fill': 'favorite',
  'heart': 'favorite-border',
  'bell.fill': 'notifications',
  'bell': 'notifications-none',
  'gear': 'settings',
  'person.fill': 'person',
  'person': 'person-outline',
  'trash.fill': 'delete',
  'trash': 'delete-outline',
  'magnifyingglass': 'search',
  'plus': 'add',
  'minus': 'remove',
  'checkmark.circle.fill': 'check-circle',
  'xmark.circle.fill': 'cancel',
  'info.circle.fill': 'info',
  'exclamationmark.triangle.fill': 'warning',
  'arrow.right': 'arrow-forward',
  'arrow.left': 'arrow-back',
  'ellipsis': 'more-vert',
  'link': 'link',
  'doc.fill': 'description',
  'doc': 'description',
  'camera.fill': 'camera',
  'photo.fill': 'photo',
  'play.fill': 'play-arrow',
  'stop.fill': 'stop',
  'pause.fill': 'pause',
  'square.fill': 'stop',
  'rectangle.fill': 'crop',
  'cloud.fill': 'cloud',
  'moon.fill': 'nights-stay',
  'sun.max.fill': 'wb-sunny',
  'sun.min.fill': 'wb-sunny',
  'sunrise.fill': 'sunny',
  'sunset.fill': 'sunny',
  'leaf.fill': 'eco',
  'checkmark': 'check',
  'cross': 'close',
  'pencil': 'edit',
  'folder.fill': 'folder',
  'folder': 'folder-open',
  'calendar': 'event',
  'clock.fill': 'access-time',
  'clock': 'access-time',
  'location.fill': 'place',
  'location': 'place',
  'music.note': 'music-note',
  'music.note.list': 'queue-music',
  'shuffle': 'shuffle',
  'repeat': 'repeat',
  'volume': 'volume-up',
  'speaker.fill': 'speaker',
  'speaker.slash.fill': 'volume-off'
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof MaterialIcons>['name']
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
