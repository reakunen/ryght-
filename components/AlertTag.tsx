"use client";
import { Alert } from "flowbite-react";
import { useState } from "react";
export default function AlertTag() {
  const [alertOn, setAlertOn] = useState<boolean>(true);

  if (alertOn === true)
    return (
      <Alert
        color="success"
        rounded={false}
        withBorderAccent
        onDismiss={() => setAlertOn(false)}
        additionalContent={
          <>
            <div className="mb-4 mt-2 text-sm text-green-700 dark:text-green-800">
              Data is static, no API calls were done to get the data - it exists
              inside the codebase. The query does not work because there is
              nothing to query.
            </div>
            <div className="flex">
              <button
                type="button"
                onClick={() => setAlertOn(false)}
                className="rounded-lg border border-green-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 dark:border-green-800 dark:text-green-800 dark:hover:text-white"
              >
                Dismiss
              </button>
            </div>
          </>
        }
      >
        <h3 className="text-lg font-medium text-green-700 dark:text-green-800">
          This Utilizes Sample Data
        </h3>
      </Alert>
    );
  return <></>;
}
