export default function PromoBanner() {
  return (
    <div className="bg-primary text-white py-3 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <span className="font-bold">$29 OG Bundle Deal is Here!</span>
        <span className="italic mx-2">1 pep + 1 cheese pizza = $29</span>
        <a href="https://order.online/business/square-pie-guys-233210/?hideModal=true&pickup=true" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:no-underline">
          Order Here!
        </a>
      </div>
    </div>
  );
}