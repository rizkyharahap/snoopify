import {
  Pagination as MantinePagination,
  PaginationProps as MantinePaginationProps,
} from '@mantine/core';

interface PaginationProps extends Omit<MantinePaginationProps, 'total'> {
  count?: number;
  limit?: number;
}

const Pagination = ({
  count,
  limit = 10,
  ...props
}: PaginationProps & { limit?: number }) => {
  if (!count || count < 1) return null;

  const totalPage = Math.ceil(count / limit);

  return (
    <MantinePagination
      color='brand'
      ml='auto'
      align='flex-end'
      withControls={false}
      {...props}
      total={totalPage >= 10 ? 10 : totalPage}
    />
  );
};

export default Pagination;
