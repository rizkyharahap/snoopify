import type { GroupProps } from '@mantine/core';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import UserCard from 'components/card/user';
import { useGetCurrentUserProfileQuery } from 'services/api/userApi';
import { useAppSelector } from 'services/hooks/useAppSelector';

const Avatar = (props: GroupProps) => {
  const auth = useAppSelector(state => state.auth);

  const { data: user } = useGetCurrentUserProfileQuery(auth.token || skipToken);

  return (
    <UserCard
      name={user?.display_name}
      follower={user?.followers?.total}
      imageUrl={user?.images?.[0]?.url}
      externalUrl={user?.external_urls.spotify}
      {...props}
    />
  );
};

export default Avatar;
