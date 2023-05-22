import Button from "./Button"

interface AccountActionsProps {
}

const actions = [
  {
    title: 'Account Details',
    description: 'View your Murphy\'s Account',
    href: '#',
  },
  {
    title: 'Orders',
    description: 'Place, track, and organize.',
    href: '#',
  },
  {
    title: 'Reports',
    description: 'Run the numbers on orders.',
    href: '#',
  },
  {
    title: 'Product Updates',
    description: 'Sign up for the latest.',
    href: '#',
  },
  {
    title: 'Payment',
    description: 'Add, view, and change methods.',
    href: '#',
  },
  {
    title: 'Invoices',
    description: 'Track your payments.',
    href: '#',
  },
  {
    title: 'Returns',
    description: 'Start the process.',
    href: '#',
  },
  {
    title: 'Support',
    description: 'Get in touch with our team.',
    href: '#',
  },
  {
    title: 'Resources',
    description: 'More information and services.',
    href: '#',
  },
]

const AccountActions = (props: AccountActionsProps) => {
  return <section className="page-section account-actions bg-background-bone">
    <div className="container">
      <h2 className="text-center typography-heading-md ">Your Account</h2>

      <div className="account-actions__grid">
        {actions.map(({ title, description, href }, index) =>
          <div className="account-actions__item" key={index}>
            <Button variant="secondary" icon={false} href={href} disableCopy>
              <div className="typography-body-lg account-actions__item__title">
                {title}
              </div>

              <div className="typography-body-sm">
                {description}
              </div>
            </Button>
          </div>
        )}
      </div>
    </div>
  </section>

}

export default AccountActions