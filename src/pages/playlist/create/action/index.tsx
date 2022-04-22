import { Button } from '@mantine/core';
import { PropsWithChildren, useCallback } from 'react';
import { useAppDispatch } from 'services/hooks/useAppDispatch';
import { useAppSelector } from 'services/hooks/useAppSelector';
import {
  addSelectedTrack,
  removeSelectedTrack,
} from 'services/reducers/trackSlice';
import type { Track } from 'services/types/trackTypes';

const SelectTrackAction = ({
  track,
  children,
}: PropsWithChildren<{ track: Track }>) => {
  const dispatch = useAppDispatch();

  const { selectedTracks } = useAppSelector(state => state.track);

  const isSelected = !!selectedTracks.find(item => item.id === track.id);

  const handleOnSelectTrack = useCallback(
    (isSelected: boolean, track: Track) => {
      if (isSelected) {
        dispatch(removeSelectedTrack(track.id));
      } else {
        dispatch(addSelectedTrack(track));
      }
    },
    [dispatch],
  );

  return (
    <>
      <Button
        color='brand'
        size='xs'
        sx={{ width: 80 }}
        variant={isSelected ? 'light' : 'filled'}
        onClick={() => handleOnSelectTrack(isSelected, track)}
      >
        {isSelected ? 'Deselect' : 'Select'}
      </Button>

      {children}
    </>
  );
};

export default SelectTrackAction;
