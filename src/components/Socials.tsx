import { SITE } from '../config';
import { Icon } from './Icon';

export function Socials() {
  return (
    <div className="soc">
      <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="ig" /></a>
      <a href={SITE.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Icon name="yt" /></a>
    </div>
  );
}
