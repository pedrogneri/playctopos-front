import React from 'react';

import { Container } from './styles';

type Props = {
  username: string,
}

const UserBadge = ({ username }: Props) => <Container>{`Added by ${username}`}</Container>;

export default UserBadge;
