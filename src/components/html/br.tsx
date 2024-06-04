import cx from 'classnames';
import { ResponsiveHtmlProps } from '@/components/html/html';
import { sizeToTextClassName } from '@/styles/constants';

export function ResponsiveBr({
  className,
  textSize = 'md',
}: ResponsiveHtmlProps) {
  return <br className={cx(sizeToTextClassName[textSize], className)} />;
}
