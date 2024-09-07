export default function Layout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>CRM Statistics</title>
        </head>
        <body className="bg-gray-100">
          <header className="bg-white p-4 shadow-md">
            <h1 className="text-2xl font-bold">CRM Dashboard</h1>
          </header>
          <main className="container mx-auto p-4">{children}</main>
        </body>
      </html>
    );
  }
  