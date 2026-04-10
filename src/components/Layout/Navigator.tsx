/** @format */

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import type { FC } from 'react';

const Navigator: FC = () => {
  return (
    <Stack spacing={1} direction="row">
      <Link href="/">
        <Button variant="text" className="text-lg!">
          トップ
        </Button>
      </Link>
      <Link href="/welcome">
        <Button variant="text" className="text-lg! font-bold!">
          新歓情報
        </Button>
      </Link>
      <Link href="/event">
        <Button variant="text" className="text-lg!">
          解説
        </Button>
      </Link>
      <Link href="/contact">
        <Button variant="text" className="text-lg!">
          お問い合わせ
        </Button>
      </Link>
      <Link href="/links">
        <Button variant="text" className="text-lg!">
          リンク
        </Button>
      </Link>
      <Link href="/members">
        <Button variant="text" className="text-lg!">
          部員向け
        </Button>
      </Link>
    </Stack>
  );
};

export default Navigator;
