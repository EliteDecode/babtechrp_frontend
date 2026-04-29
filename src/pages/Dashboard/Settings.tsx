import { ChangeEmailForm } from "@/components/dashboard_components/forms/ChangeEmailForm";
import ChangePasswordForm from "@/components/dashboard_components/forms/ChangePasswordForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ButtonSpinners from "@/helpers/ButtonSpinners";
import useSettings from "@/hooks/useSettings";
import { FaRegCopy } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const Settings = () => {
  const { user, handleDelete, isLoading, copyReferralCode } = useSettings();

  return (
    <div className="max-w-2xl space-y-4">
      <h1
        className="text-lg font-bold text-gray-900 mb-5"
        style={{ fontFamily: "eczar" }}>
        Account Settings
      </h1>

      {/* Referral code */}
      <div className="bg-white rounded-xl border border-gray-100 p-4">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
          Referral Code
        </p>
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm font-bold text-gray-900">
            {user?.referralCode}
          </span>
          <button
            onClick={copyReferralCode}
            className="flex items-center gap-1.5 text-xs text-green-600 bg-green-50 border border-green-200 px-3 py-1.5 rounded-lg hover:bg-green-100 transition-colors">
            <FaRegCopy size={12} />
            Copy code
          </button>
        </div>
      </div>

      {/* Email */}
      <div className="bg-white rounded-xl border border-gray-100 p-4">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
          Email Address
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">
            {user?.email}
          </span>
          <ChangeEmailForm />
        </div>
      </div>

      {/* Username */}
      {user?.username && (
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
            Username
          </p>
          <span className="text-sm font-medium text-gray-900">
            @{user.username}
          </span>
        </div>
      )}

      {/* Change password */}
      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
          Change Password
        </p>
        <ChangePasswordForm />
      </div>

      {/* Danger zone */}
      <div className="bg-white rounded-xl border border-red-100 p-4">
        <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-2">
          Danger Zone
        </p>
        <p className="text-xs text-gray-400 mb-3">
          Once you delete your account, there is no going back.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex items-center gap-2 text-xs text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded-lg hover:bg-red-100 transition-colors">
              <MdDeleteOutline size={14} />
              Delete Account
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle style={{ fontFamily: "eczar" }}>
                Delete Account
              </DialogTitle>
              <DialogDescription>
                Are you sure you want to delete your account? This action cannot
                be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                disabled={isLoading}
                variant="destructive"
                onClick={handleDelete}
                type="submit"
                style={{ fontFamily: "eczar" }}>
                {isLoading ? <ButtonSpinners /> : "Delete Account"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Settings;
