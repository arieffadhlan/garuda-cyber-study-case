"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "@/redux/features/transaction/transactionAction";
import Button from "../atoms/Button";
import dayjs from "dayjs";

const OrderHistoryList = () => {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.transaction);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  const userTransactions = transactions.filter((transaction) => {
    return transaction.user_id === user.data.id
  });

  return (
    <div className="flex flex-col gap-4">
      {userTransactions.length > 0 && userTransactions.map((transaction) => (
        <div key={transaction.id} className="flex flex-col bg-neutral-1 border rounded-lg shadow-sm">
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <div className="flex flex-col gap-2.5 md:flex-row md:gap-9">
              <div className="flex flex-col gap-0.5 text-sm">
                <span className="font-semibold">Order Number:</span>
                <span className="font-medium text-[#595959]">
                  {transaction.code}
                </span>
              </div>
              <div className="flex flex-col gap-0.5 text-sm">
                <span className="font-semibold">Order Date:</span>
                <span className="font-medium text-[#595959]">
                  {dayjs(transaction.createdAt).format("DD MMMM YYYY")}
                  </span>
              </div>
              <div className="flex flex-col gap-0.5 text-sm">
                <span className="font-semibold">Tax:</span>
                <span className="font-medium text-[#595959]">
                  Rp {
                    transaction.orders.reduce((nextValue, current) => {
                        return nextValue + ((current.quantity * current.product.price) * (10/100))
                    }, 0).toLocaleString("id-ID")
                  }
                </span>
              </div>
              <div className="flex flex-col gap-0.5 text-sm">
                <span className="font-semibold">Total:</span>
                <span className="font-bold text-emerald-700">
                  Rp {transaction.ammount.toLocaleString("id-ID")}
                </span>
              </div>
              {transaction?.voucher?.code && (
                <div className="flex flex-col gap-0.5 text-sm">
                  <span className="font-semibold">Voucher:</span>
                  <span className="font-bold text-emerald-700">{transaction.voucher.code}</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col px-4 divide-y divide-gray-200">
            {transaction.orders.map((item, index) => (
              <div key={index} className="flex gap-4 py-4">
                <div className="overflow-hidden flex-shrink-0 w-16 h-16 rounded-md border border-gray-200">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col gap-0.5 w-full">
                  <div className="flex flex-col text-sm xs:flex-row xs:justify-between xs:items-center xs:text-base">
                    <span className="font-medium">{item.product.name}</span>
                    <strong className="font-bold">Rp {(item.quantity * item.product.price).toLocaleString("id-ID")}</strong>
                  </div>
                  <span className="text-xs text-[#595959] xs:text-sm">Quantity: {item.quantity}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end px-4 py-3 border-t">
            <Button>View Invoice</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderHistoryList;