import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Algo de errado não está certo...</h1>
      <p className="mt-4 text-accent-foreground">
        Um erro aconteceu na aplicação, mais detalhes abaixo:
      </p>

      <pre>{error?.message || JSON.stringify(error)}</pre>

      <p className="mt-8 text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
