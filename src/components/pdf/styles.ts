import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    color: "#1a1a1a",
    fontFamily: "Helvetica",
    fontSize: 11,
    padding: 24,
    border: "1pt solid #e0e0e0",
  },

  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
    textTransform: "uppercase",
    color: "#222222",
  },

  subtitle: {
    textAlign: "center",
    fontSize: 12,
    color: "#666666",
    marginBottom: 12,
  },

  date: {
    textAlign: "right",
    fontSize: 10,
    color: "#888888",
    marginBottom: 12,
  },

  section: {
    borderTop: "1pt solid #dddddd",
    paddingTop: 10,
    marginTop: 10,
    marginBottom: 16,
  },

  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  label: {
    fontSize: 10,
    color: "#444444",
  },

  value: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#111111",
  },

  productBox: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    border: "1pt solid #ececec",
    borderRadius: 4,
    marginBottom: 10,
  },

  totalRow: {
    marginTop: 16,
    paddingTop: 12,
    borderTop: "1pt solid #000000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 13,
    fontWeight: "bold",
  },
});
