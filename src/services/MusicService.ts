import titleBegin from '../assets/audios/musics/title-begin.mp3';
import title from '../assets/audios/musics/title.mp3';
import paffTheme from '../assets/audios/musics/paff-theme.mp3';
import Musics from '../constants/Musics';

const INITIAL_VOLUME = 0.75;

export default class MusicService {
  private static audioContext: AudioContext;
  private static buffers: Map<string, AudioBuffer>;
  private static activeSources: Map<string, AudioBufferSourceNode>;
  private static volumes: Map<string, GainNode>;

  static initialize(): void {
    this.audioContext = new window.AudioContext();
    this.buffers = new Map();
    this.activeSources = new Map();
    this.volumes = new Map();
    this.loadMusic(titleBegin, Musics.TITLE_BEGIN);
    this.loadMusic(title, Musics.TITLE);
    this.loadMusic(paffTheme, Musics.PAFF_THEME);
  }

  private static async loadMusic(musicPath: string, musicName: string): Promise<void> {
    let arrayBuffer = await (await fetch(musicPath)).arrayBuffer();
    let buffer = await this.audioContext.decodeAudioData(arrayBuffer);
    let gain = this.audioContext.createGain();
    this.buffers.set(musicName, buffer);
    this.volumes.set(musicName, gain);
  }

  static playMusic(musicName: string, loop: boolean = true): void {
    const buffer = this.buffers.get(musicName);
    const gain = this.volumes.get(musicName);
    const source = this.audioContext.createBufferSource();
    if (buffer) {
      source.buffer = buffer;
    }
    if (loop) {
      source.loop = loop;
    }
    const volume = this.volumes.get(musicName);
    if (volume) {
      volume.gain.value = this.normalizeVolume(INITIAL_VOLUME);
    }
    if (gain) {
      source.connect(gain).connect(this.audioContext.destination);
      source.start();
      this.activeSources.set(musicName, source);
    }
  }

  private static normalizeVolume(volume: number): number {
    return Math.min(Math.max(volume, 0), 1);
  }

  static setVolume(musicName: string, newVolume: number): void {
    const volume = this.volumes.get(musicName)
    if (volume) {
      volume.gain.value = this.normalizeVolume(newVolume);
    }
  }

  static stopMusic(musicName: string): void {
    this.activeSources.get(musicName)?.stop();
    this.activeSources.delete(musicName);
  }

  static stopAll(): void {
    this.activeSources.forEach(source => source.stop());
    this.activeSources.clear();
  }
}