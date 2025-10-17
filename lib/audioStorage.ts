export interface AudioFile {
    id: string;
    title: string;
    duration: string;
    categories: string[];
    src: string;
}

export interface AudioProgress {
    audioId: string;
    progress: number;
    lastPlayed: string;
    completedSessions: number;
}

const STORAGE_KEY = "audio_training_progress";

export const getAudioProgress = (audioId: string): AudioProgress | null => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const allProgress: Record<string, AudioProgress> = JSON.parse(stored);
    return allProgress[audioId] || null;
};

export const saveAudioProgress = (audioId: string, currentTime: number, duration: number) => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const allProgress: Record<string, AudioProgress> = stored ? JSON.parse(stored) : {};

    const existingProgress = allProgress[audioId];
    const progressPercent = (currentTime / duration) * 100;

    const wasCompleted = existingProgress && existingProgress.progress >= 95;
    const isNowCompleted = progressPercent >= 95;

    allProgress[audioId] = {
        audioId,
        progress: progressPercent,
        lastPlayed: new Date().toISOString(),
        completedSessions: (existingProgress?.completedSessions || 0) + (isNowCompleted && !wasCompleted ? 1 : 0),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
};

export const getAllProgress = (): Record<string, AudioProgress> => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
};
