import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { styles } from "./styles";
import { OrderPayload } from "@/types/OrderPayload";
import { useGetAllOrder } from "@/react-query/order/order";
import { Separator } from "../ui/separator";
import { Navigate, useNavigate } from "react-router-dom";
import Loading from "@/utils/Loading";
import { useGetCurrentUser } from "@/react-query/user/user";

const CashReceiptPdf = () => {
  const { data: orders, isLoading, isError } = useGetAllOrder();

  const { data: currentUser } = useGetCurrentUser();

  const formattedDate = new Date(Date.now()).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Navigate to={"app/market"} />;
  }

  const MyDocument = () => {
    return (
      <>
        {orders &&
          orders.map((order: OrderPayload, index: number) => (
            <Document key={index}>
              <Page size="A4" style={styles.page}>
                <View>
                  {/* Title and Date */}
                  <Text style={styles.title}>CASH RECEIPT</Text>
                  <Text style={styles.date}>{formattedDate}</Text>

                  {/* Product Information */}
                  <Text style={styles.subtitle}>Product Information</Text>
                  <View style={[styles.section, styles.productBox]}>
                    <View style={styles.row}>
                      <Text style={styles.label}>Product Name</Text>
                      <Text style={styles.value}>{order?.Market.title}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label}>Quantity</Text>
                      <Text style={styles.value}>{order?.quantity}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label}>Price per Unit</Text>
                      <Text style={styles.value}>
                        {order?.Market?.price} MMK
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label}>Payment Method</Text>
                      <Text style={styles.value}>KBZ Pay</Text>
                    </View>
                  </View>
                  {/* Seller Information */}
                  <Text style={styles.subtitle}>Seller Information</Text>
                  <View style={styles.section}>
                    <View style={styles.row}>
                      <Text style={styles.label}>Seller Name</Text>
                      <Text style={styles.value}>
                        {order?.productOwnerName}
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label}>Phone</Text>
                      <Text style={styles.value}>
                        {order?.productOwnerPhone}
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label}>Address</Text>
                      <Text style={styles.value}>
                        {order?.productOwnerAddress}
                      </Text>
                    </View>
                  </View>

                  {/* Buyer Information */}
                  <Text style={styles.subtitle}>Buyer Information</Text>
                  <View style={styles.section}>
                    <View style={styles.row}>
                      <Text style={styles.label}>Customer Name</Text>
                      <Text style={styles.value}>{order?.name}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label}>Phone</Text>
                      <Text style={styles.value}>{order?.buyerPhone}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label}>Address</Text>
                      <Text style={styles.value}>{order?.buyerAddress}</Text>
                    </View>
                  </View>

                  {/* Total */}
                  <View style={styles.totalRow}>
                    <Text>Total</Text>
                    <Text>{order?.price} MMK</Text>
                  </View>
                </View>
              </Page>
            </Document>
          ))}
      </>
    );
  };
  return (
    <>
      <div className="flex items-center justify-around">
        <div
          className=" cursor-pointer hover:underline text-2xl text-slate-500 font-bold underline-offset-2"
          onClick={() => {
            if (currentUser.role === "ADMIN") {
              navigate("/dashboard/market");
            } else {
              navigate("/app/market");
            }
          }}
        >
          Order successful
        </div>
        <div className=" border rounded-lg p-2 cursor-pointer ">
          <PDFDownloadLink
            document={<MyDocument />}
            fileName="cash-receipt.pdf"
          >
            {({ loading }) =>
              loading ? "Loading document..." : "Download Receipt!"
            }
          </PDFDownloadLink>
        </div>
      </div>
      <Separator className="mt-2" />
      <div className="w-full md:h-[500px] lg:h-[500px] xl:h-[500px] h-[400px]">
        <PDFViewer width="100%" height="100%">
          <MyDocument />
        </PDFViewer>
      </div>
    </>
  );
};

export default CashReceiptPdf;
