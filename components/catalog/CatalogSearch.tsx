import { Input } from '@/components/ui/input';
import { Search, Loader2, X } from 'lucide-react';

type CatalogSearchProps = {
  search: string;
  onSearchChange: (value: string) => void;
  isSearching: boolean;
  onClear: () => void;
};

export function CatalogSearch({ search, onSearchChange, isSearching, onClear }: CatalogSearchProps) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

      <Input value={search} onChange={(e) => onSearchChange(e.target.value)} placeholder="Пошук" className="pl-9 pr-9" />

      {isSearching && <Loader2 className="absolute right-3 top-1/2 size-4 -translate-y-1/2 animate-spin text-muted-foreground" />}

      {!isSearching && search && (
        <button type="button" onClick={onClear} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" aria-label="Очистити пошук">
          <X className="size-4 cursor-pointer" />
        </button>
      )}
    </div>
  );
}
