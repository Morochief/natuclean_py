/** @jsxImportSource solid-js */
import { createSignal, Show, For } from 'solid-js';

interface ScentNote {
  name: string;
  description?: string;
}

interface ScentTriangleProps {
  top: ScentNote[];
  heart: ScentNote[];
  base: ScentNote[];
}

export default function ScentTriangle(props: ScentTriangleProps) {
  const [activeLevel, setActiveLevel] = createSignal<'top' | 'heart' | 'base'>('heart');
  
  const levels = [
    { key: 'top' as const, label: 'Salida', color: '#19e63c', description: 'Lo que percibes primero' },
    { key: 'heart' as const, label: 'Corazón', color: '#d4a373', description: 'El alma de la fragancia' },
    { key: 'base' as const, label: 'Fondo', color: '#2c2c2c', description: 'Lo que permanece' },
  ];

  return (
    <div class="scent-triangle">
      {/* Interactive Triangle Visualization */}
      <div class="scent-triangle__visual">
        <svg viewBox="0 0 400 350" class="scent-triangle__svg">
          {/* Triangle Background */}
          <defs>
            <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="rgba(25, 230, 60, 0.1)" />
              <stop offset="100%" stop-color="rgba(212, 163, 115, 0.05)" />
            </linearGradient>
          </defs>
          
          {/* Main Triangle */}
          <polygon
            points="200,30 50,280 350,280"
            fill="url(#triangleGradient)"
            stroke="rgba(0,0,0,0.1)"
            stroke-width="1"
          />
          
          {/* Level Indicators */}
          <Show when={activeLevel() === 'top'}>
            <circle cx="200" cy="80" r="45" fill="rgba(25, 230, 60, 0.2)" class="scent-triangle__pulse" />
            <circle cx="200" cy="80" r="40" fill="none" stroke="#19e63c" stroke-width="2" />
          </Show>
          <Show when={activeLevel() === 'heart'}>
            <ellipse cx="200" cy="180" rx="60" ry="35" fill="rgba(212, 163, 115, 0.2)" class="scent-triangle__pulse" />
            <ellipse cx="200" cy="180" rx="55" ry="30" fill="none" stroke="#d4a373" stroke-width="2" />
          </Show>
          <Show when={activeLevel() === 'base'}>
            <rect x="150" y="245" width="100" height="30" rx="15" fill="rgba(44, 44, 44, 0.1)" class="scent-triangle__pulse" />
            <rect x="155" y="250" width="90" height="20" rx="10" fill="none" stroke="#2c2c2c" stroke-width="2" />
          </Show>
        </svg>

        {/* Clickable Areas */}
        <button
          class={`scent-triangle__trigger scent-triangle__trigger--top ${activeLevel() === 'top' ? 'active' : ''}`}
          onClick={() => setActiveLevel('top')}
          aria-label="Notas de Salida"
        >
          <span class="scent-triangle__trigger-label">Salida</span>
        </button>
        <button
          class={`scent-triangle__trigger scent-triangle__trigger--heart ${activeLevel() === 'heart' ? 'active' : ''}`}
          onClick={() => setActiveLevel('heart')}
          aria-label="Notas de Corazón"
        >
          <span class="scent-triangle__trigger-label">Corazón</span>
        </button>
        <button
          class={`scent-triangle__trigger scent-triangle__trigger--base ${activeLevel() === 'base' ? 'active' : ''}`}
          onClick={() => setActiveLevel('base')}
          aria-label="Notas de Fondo"
        >
          <span class="scent-triangle__trigger-label">Fondo</span>
        </button>
      </div>

      {/* Notes Display */}
      <div class="scent-triangle__details">
        <div class="scent-triangle__header">
          <span 
            class="scent-triangle__level-label"
            style={{ color: levels.find(l => l.key === activeLevel())?.color }}
          >
            {levels.find(l => l.key === activeLevel())?.label}
          </span>
          <span class="scent-triangle__level-desc">
            {levels.find(l => l.key === activeLevel())?.description}
          </span>
        </div>
        
        <div class="scent-triangle__notes">
          <Show when={activeLevel() === 'top'}>
            <For each={props.top}>
              {(note, i) => (
                <div class="scent-triangle__note">
                  <span class="scent-triangle__note-name">{note.name}</span>
                  <Show when={note.description}>
                    <span class="scent-triangle__note-desc">{note.description}</span>
                  </Show>
                </div>
              )}
            </For>
          </Show>
          <Show when={activeLevel() === 'heart'}>
            <For each={props.heart}>
              {(note, i) => (
                <div class="scent-triangle__note">
                  <span class="scent-triangle__note-name">{note.name}</span>
                  <Show when={note.description}>
                    <span class="scent-triangle__note-desc">{note.description}</span>
                  </Show>
                </div>
              )}
            </For>
          </Show>
          <Show when={activeLevel() === 'base'}>
            <For each={props.base}>
              {(note, i) => (
                <div class="scent-triangle__note">
                  <span class="scent-triangle__note-name">{note.name}</span>
                  <Show when={note.description}>
                    <span class="scent-triangle__note-desc">{note.description}</span>
                  </Show>
                </div>
              )}
            </For>
          </Show>
        </div>
      </div>
    </div>
  );
}
