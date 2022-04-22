import { MantineSize } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useCallback, useEffect, useState } from 'react';

export type ObjectBreakPoint<T> = { [key in MantineSize]: T } & { base: T };

export const useChangeBreakpoint = <T>({
  base,
  xs,
  sm,
  md,
  lg,
  xl,
}: ObjectBreakPoint<T>) => {
  const isXs = useMediaQuery('(min-width: 577px)');
  const isSm = useMediaQuery('(min-width: 769px)');
  const isMd = useMediaQuery('(min-width: 993px)');
  const isLg = useMediaQuery('(min-width: 1201px)');
  const isXl = useMediaQuery('(min-width: 1401px)');

  const [value, setValue] = useState<T>(base);

  const checkBreakPoint = useCallback(() => {
    return isXl ? xl : isLg ? lg : isMd ? md : isSm ? sm : isXs ? xs : base;
  }, [base, isLg, isMd, isSm, isXl, isXs, lg, md, sm, xl, xs]);

  useEffect(() => {
    setValue(checkBreakPoint());
  }, [checkBreakPoint]);

  return value;
};
