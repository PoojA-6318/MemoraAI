import PageLayout from "../components/PageLayout";

function Timeline() {
  return (
    <PageLayout title="Memory Evolution Timeline">

      <div className="space-y-6">

        <div className="bg-white/5 rounded-3xl p-6">
          09:12 AM — Pricing Strategy Approved
        </div>

        <div className="bg-white/5 rounded-3xl p-6">
          11:43 AM — Knowledge Extracted from Meeting
        </div>

        <div className="bg-white/5 rounded-3xl p-6">
          Yesterday — Customer Churn Analysis Generated
        </div>

        <div className="bg-white/5 rounded-3xl p-6">
          2 Days Ago — Infrastructure Knowledge Gap Detected
        </div>

      </div>

    </PageLayout>
  );
}

export default Timeline;