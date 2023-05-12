'use client';

import React, { useContext, createContext, useCallback, useMemo } from 'react';
import { UserSettings } from '@/types';
import { useLocalStorage } from './useLocalStorage';

export type SettingsType = UserSettings & {
  updateUsername: (str: UserSettings['username']) => void;
  updateDiff: (diff: UserSettings['diff']) => void;
  updateProto: (val: UserSettings['showProto']) => void;
};

const init: SettingsType = {
  username: 'MyUsername',
  diff: 'easy',
  showProto: false,
  updateUsername: () => undefined,
  updateDiff: () => undefined,
  updateProto: () => undefined,
};

const UserSettingsContext = createContext<SettingsType>(init);

type SettingsProviderProps = {
  children: React.ReactNode;
};

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [username, usernameSet] = useLocalStorage<SettingsType['username']>(
    init.username,
    'wam-username',
  );
  const [diff, diffSet] = useLocalStorage<SettingsType['diff']>(
    init.diff,
    'wam-diff',
  );
  const [proto, protoSet] = useLocalStorage<SettingsType['showProto']>(
    init.showProto,
    'wam-proto',
  );

  const updateUsername: SettingsType['updateUsername'] = useCallback(
    (str) => {
      // TODO: validation
      usernameSet(str);
    },
    [usernameSet],
  );
  const updateDiff: SettingsType['updateDiff'] = useCallback(
    (diff) => diffSet(diff),
    [diffSet],
  );
  const updateProto: SettingsType['updateProto'] = useCallback(
    (bool) => protoSet(bool),
    [protoSet],
  );

  const ctx: SettingsType = useMemo(
    () => ({
      username,
      updateUsername,
      diff,
      updateDiff,
      showProto: proto,
      updateProto,
    }),
    [username, updateUsername, diff, updateDiff, proto, updateProto],
  );

  return (
    <UserSettingsContext.Provider value={ctx}>
      {children}
    </UserSettingsContext.Provider>
  );
};

export const useSettings = () => useContext(UserSettingsContext);
