import { createStore, withProps, select } from '@ngneat/elf';
export type SearchResult = { ID:number, Title:string, Description: string};
interface SearchProps {
  results: SearchResult[] | null;
}

const searchStore = createStore(
  { name: 'search' },
  withProps<SearchProps>({ results: null })
);

export class SearchRepository {
  results$ = searchStore.pipe(select((state) => state.results));

  updateResults(results: SearchProps['results']) {
    searchStore.update((state) => ({
      ...state,
      results
    }));
  }
}