/* styles/History.module.css */
.historyPage {
  width: 100%;
}

.historyPage h1 {
  margin-bottom: 2rem;
}

.filters {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filterGroup {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 200px;
}

.filterGroup label {
  font-weight: 500;
  color: var(--text-light);
}

.select,
.searchInput {
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--card-background);
}

.searchInput {
  width: 100%;
}

.select {
  width: 100%;
}

.resultCount {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 1rem;
}

.results {
  width: 100%;
}

.emptyState {
  text-align: center;
  padding: 3rem;
  background-color: var(--card-background);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
}

.emptyState h3 {
  margin-bottom: 1rem;
}

.emptyStateMessage {
  color: var(--text-light);
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .filterGroup {
    min-width: 100%;
  }
}