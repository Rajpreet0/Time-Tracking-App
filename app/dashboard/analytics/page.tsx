import Menu from '@/components/Navigation/Menu'
import ProtectedRoute from '@/components/ProtectedRoute'

const Analytics = () => {
  return (
    <ProtectedRoute>
        <div>
            <Menu/>
        </div>
    </ProtectedRoute>
  )
}

export default Analytics



/*
    COLORS:

    BLACK: #00000
           #222222
    MINT:  #1DCD9F
           #169976

*/