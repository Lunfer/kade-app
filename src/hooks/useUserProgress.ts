import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { progressRepo } from '../data/repositories/progress';
import { UserProgress } from '../data/types';

export function useUserProgress() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  const reload = useCallback(async () => {
    setLoading(true);
    const p = await progressRepo.getUserProgress();
    setProgress(p);
    setLoading(false);
  }, []);

  useFocusEffect(
    useCallback(() => {
      reload();
    }, [reload])
  );

  return { progress, loading, reload };
}
