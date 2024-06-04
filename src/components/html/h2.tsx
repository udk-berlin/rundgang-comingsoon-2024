import cx from 'classnames';
import { ResponsiveHtmlProps } from '@/components/html/html';
import { sizeToTextClassName } from '@/styles/constants';

export function ResponsiveH2({
  className,
  textSize = 'lg',
  children,
}: ResponsiveHtmlProps) {
  return (
    <h2 className={cx(sizeToTextClassName[textSize], className)}>{children}</h2>
  );
}
