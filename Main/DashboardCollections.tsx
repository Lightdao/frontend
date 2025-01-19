import React from "react";
import "./DashboardCollections.css";

const collections = [
  { name: "Meaningful Project", owners: "10.2k", change: "+15.8%", price: "4,915" },
  { name: "Kingdom Project", owners: "8.8k", change: "-24.5%", price: "881" },
];

const DashboardCollections: React.FC = () => {
  return (
    <section className="dashboard-collections">
      <h2>Collections</h2>
      <table>
        <thead>
          <tr>
            <th>Collection</th>
            <th>Owners</th>
            <th>7d %</th>
            <th>Floor Price</th>
          </tr>
        </thead>
        <tbody>
          {collections.map((collection, index) => (
            <tr key={index}>
              <td>{collection.name}</td>
              <td>{collection.owners}</td>
              <td>{collection.change}</td>
              <td>{collection.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default DashboardCollections;
