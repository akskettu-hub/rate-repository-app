import { render, screen } from "@testing-library/react-native";
import RepositoryItem from "../../components/RepositoryList/RepositoryItem";

const dummyRepoItem = {
  id: 'jaredpalmer.formik',
  fullName: 'jaredpalmer/formik',
  description: 'Build forms in React, without the tears',
  language: 'TypeScript',
  forksCount: 1619,
  stargazersCount: 21856,
  ratingAverage: 88,
  reviewCount: 3,
  ownerAvatarUrl:
    'https://avatars2.githubusercontent.com/u/4060187?v=4',
}

describe('RepositoryItem', () => {
  it('renders repository name', () => {
    render(<RepositoryItem item={dummyRepoItem} />)

    // screen.debug()

    expect(screen.getByText('jaredpalmer/formik')).toBeDefined()
  });
});
