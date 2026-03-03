import { ParticleScene } from '../animation/scene';

interface IntroLine {
  text: string;
  theme: number;
  className: string;
}

const INTRO_LINES: IntroLine[] = [
  {
    text: 'Hello, I\'m Darren',
    theme: 0,
    className: 'intro-line-rise',
  },
  {
    text: 'I craft digital experiences',
    theme: 1,
    className: 'intro-line-letter',
  },
  {
    text: 'Full-stack developer & designer',
    theme: 2,
    className: 'intro-line-scale',
  },
  {
    text: 'Blending code with creativity',
    theme: 3,
    className: 'intro-line-slide',
  },
  {
    text: 'Let\'s create something extraordinary',
    theme: 4,
    className: 'intro-line-blur',
  },
];

// Timing constants
const FANOUT_DURATION = 2000;      // Wait for particles to fan out
const LINE_DISPLAY_TIME = 2800;    // Each line visible for...
const LINE_FADE_TIME = 600;        // Fade transition time
const LINE_INTERVAL = LINE_DISPLAY_TIME + LINE_FADE_TIME;

export class IntroSequence {
  private container: HTMLElement;
  private scene: ParticleScene;
  private onComplete: () => void;
  private lineElements: HTMLElement[] = [];

  constructor(container: HTMLElement, scene: ParticleScene, onComplete: () => void) {
    this.container = container;
    this.scene = scene;
    this.onComplete = onComplete;
  }

  start(): void {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'intro-overlay';
    overlay.className = 'fixed inset-0 z-10 flex items-center justify-center pointer-events-none';
    this.container.appendChild(overlay);

    // Create all line elements (hidden initially)
    INTRO_LINES.forEach((line, i) => {
      const el = document.createElement('div');
      el.className = `intro-line absolute opacity-0 text-center px-8 max-w-4xl ${line.className}`;
      el.setAttribute('data-theme', String(line.theme));

      if (i === 0 || i === 2 || i === 4) {
        // Playfair Display italic for odd-positioned (visual variety)
        el.innerHTML = `<span class="font-display italic">${line.text}</span>`;
      } else {
        // DM Sans for the others
        el.innerHTML = `<span class="font-body">${line.text}</span>`;
      }

      overlay.appendChild(el);
      this.lineElements.push(el);
    });

    // Apply theme-specific text sizing
    this.applySizing();

    // Start sequence after fan-out
    setTimeout(() => this.playSequence(0), FANOUT_DURATION);
  }

  private applySizing(): void {
    const sizes = [
      'text-5xl md:text-7xl lg:text-8xl tracking-tight',
      'text-3xl md:text-5xl lg:text-6xl tracking-widest uppercase',
      'text-4xl md:text-6xl lg:text-7xl tracking-normal',
      'text-3xl md:text-5xl lg:text-6xl tracking-wide',
      'text-4xl md:text-6xl lg:text-7xl tracking-tight',
    ];

    this.lineElements.forEach((el, i) => {
      el.classList.add(...sizes[i].split(' '));
    });
  }

  private playSequence(index: number): void {
    if (index >= INTRO_LINES.length) {
      // All lines done — fade out and trigger completion
      setTimeout(() => {
        const overlay = document.getElementById('intro-overlay');
        if (overlay) {
          overlay.style.transition = 'opacity 0.8s ease-out';
          overlay.style.opacity = '0';
          setTimeout(() => {
            overlay.remove();
            this.onComplete();
          }, 800);
        }
      }, 400);
      return;
    }

    const line = INTRO_LINES[index];
    const el = this.lineElements[index];

    // Change particle background theme immediately (before text fades in)
    this.scene.setColorMode(line.theme);

    // Small delay so the background starts shifting before text appears
    requestAnimationFrame(() => {
      // Set theme color for text
      this.applyThemeColor(el, line.theme);

      // Show line
      el.classList.add('intro-line-active');
      el.style.opacity = '1';
    });

    // After display time, hide and proceed
    setTimeout(() => {
      el.classList.remove('intro-line-active');
      el.classList.add('intro-line-exit');
      el.style.opacity = '0';

      setTimeout(() => {
        this.playSequence(index + 1);
      }, LINE_FADE_TIME);
    }, LINE_DISPLAY_TIME);
  }

  private applyThemeColor(el: HTMLElement, theme: number): void {
    const colors = [
      'text-slate-100',         // normal
      'text-pink-400',          // neon
      'text-emerald-300',       // matcha
      'text-cyan-200',          // beach
      'text-white',             // blizzard
    ];
    // Remove all theme colors
    colors.forEach(c => el.classList.remove(c));
    el.classList.add(colors[theme]);
  }
}
