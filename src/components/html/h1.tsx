import cx from 'classnames';
import { ResponsiveHtmlProps } from '@/components/html/html';
import { sizeToTextClassName } from '@/styles/constants';

export function ResponsiveH1({
  className,
  textSize = 'lg',
  children,
}: ResponsiveHtmlProps) {
  return (
    <h1 className={cx(sizeToTextClassName[textSize], className)}>{children}</h1>
  );
}
