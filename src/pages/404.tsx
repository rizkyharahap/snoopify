import { Box, Button, Text, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import ArrowLeft from 'tabler-icons-react/dist/icons/arrow-left';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Text sx={{ fontSize: '10rem', lineHeight: 0.8 }} weight='bold'>
        404
      </Text>

      <Box>
        <Title sx={{ fontSize: 28 }}>Opps, pages not found!</Title>
      </Box>

      <Button
        onClick={() => navigate(-1)}
        radius='xl'
        size='xl'
        leftIcon={<ArrowLeft />}
        fullWidth
      >
        Back to Previous Page
      </Button>
    </>
  );
};

export default NotFoundPage;
