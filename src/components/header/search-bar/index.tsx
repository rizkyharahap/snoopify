import { Input, Box, Loader } from '@mantine/core';
import {
  FormEvent,
  ChangeEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import Search from 'tabler-icons-react/dist/icons/search';

export interface SearchBarProps {
  id?: string;
  onSubmit: (search: string) => void;
  onChange?: (search: string) => void;
  defaultValue?: string;
  placeholder?: string;
  isLoading?: boolean;
}

const SearchBar = ({
  id,
  defaultValue = '',
  onSubmit,
  onChange,
  isLoading = false,
  ...props
}: SearchBarProps) => {
  const [search, setSearch] = useState(defaultValue);

  const handleOnInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    [],
  );

  useEffect(() => {
    if (onChange) onChange(search);
  }, [onChange, search]);

  return (
    <Box
      component='form'
      sx={{
        '@media (max-width: 768px)': {
          flexGrow: 1,
        },
      }}
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        onSubmit(search);
      }}
    >
      <Input
        id={id}
        width='100%'
        variant='filled'
        radius='md'
        size='lg'
        icon={<Search />}
        type='search'
        {...props}
        value={search}
        onChange={handleOnInputChange}
        rightSection={isLoading && <Loader mr='xs' />}
      />
      <button type='submit' hidden></button>
    </Box>
  );
};

export default SearchBar;
