import { useRefreshAuth } from '@/hooks/useRefreshAuth'

const DashboardPage = () => {
  useRefreshAuth()

  return (
    <div>
      <h1>Admin dashboard</h1>
    </div>
  )
}

export default DashboardPage
