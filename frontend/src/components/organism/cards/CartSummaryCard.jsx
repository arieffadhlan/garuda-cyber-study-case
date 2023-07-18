const CartSummaryCard = () => {
  return (
    <div className="flex flex-[50%] flex-col h-fit bg-neutral-1 border rounded-lg shadow-sm">
      <div className="px-4 py-3 border-b">
        <span className="font-semibold text-base xs:text-lg">
          Cart Summary
        </span>
      </div>
      <div className="flex flex-col px-4 divide-y divide-gray-200">
        <div className="flex justify-between gap-0.5 py-4 text-sm xs:text-base">
          <span className="font-medium">2 x Black T-Shirt</span>
          <strong className="whitespace-nowrap font-semibold text-emerald-700">Rp 240.000</strong>
        </div>
        <div className="flex justify-between gap-0.5 py-4 text-sm xs:text-base">
          <span className="font-medium">2 x Black T-Shirt</span>
          <strong className="whitespace-nowrap font-semibold text-emerald-700">Rp 240.000</strong>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 py-3 border-t">
        <span className="font-semibold text-sm xs:text-base">
          Total:
        </span>
        <strong className="font-bold text-emerald-700">Rp 480.000</strong>
      </div>
    </div>
  );
}

export default CartSummaryCard;